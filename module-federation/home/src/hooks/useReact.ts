import { createElement } from 'react';
import ReactDOM from 'react-dom';
import { ref, onMounted, onBeforeUnmount, onUpdated, h, getCurrentInstance } from 'vue';

export default function useReact(ReactComponent: any) {
  return {
    name: ReactComponent.name,
    setup() {
      const root = ref(null);
      const instance = getCurrentInstance();
      const props = instance?.attrs;

      function updateReactComponent() {
        if (!root.value) return;
        ReactDOM.render(createElement(ReactComponent, props), root.value);
      }

      function unmountReactComponent() {
        root.value && ReactDOM.unmountComponentAtNode(root.value);
      }

      function render() {
        return h('div', {
          ref: root
        });
      }

      onMounted(updateReactComponent);
      onUpdated(updateReactComponent);
      onBeforeUnmount(unmountReactComponent);

      return render;
    },
  }
}
