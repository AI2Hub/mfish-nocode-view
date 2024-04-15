/**
 * Global authority directive
 * Used for fine-grained control of component permissions
 * @Example
 */
import type { App, Directive, DirectiveBinding } from "vue";
import { usePermission } from "/@/hooks/web/UsePermission";

function isAuth(el: Element, binding: any) {
  const { hasPermission } = usePermission();

  const value = binding.value;
  if (!value) return;
  if (!hasPermission(value)) {
    el.parentNode?.removeChild(el);
  }
}

const mounted = (el: Element, binding: DirectiveBinding) => {
  isAuth(el, binding);
};

const authDirective: Directive = {
  mounted
};

export function setupPermissionDirective(app: App) {
  app.directive("auth", authDirective);
}

export default authDirective;
