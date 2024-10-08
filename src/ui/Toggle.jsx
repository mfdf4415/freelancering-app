import { Switch, Field, Label } from "@headlessui/react";

function Toggle({ label, enabled, onChange }) {
  return (
    <Field>
      {/* <Label>{label}</Label> */}
      <Switch
        checked={enabled}
        onChange={onChange}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-primary"
      >
        <span className="size-4 translate-x-1 rounded-full bg-bg_primary transition group-data-[checked]:translate-x-6" />
      </Switch>
    </Field>
  );
}
export default Toggle;
