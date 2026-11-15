type PendingFieldProps = {
  label: string;
  className?: string;
  /** Extra hint shown under the pending value. */
  hint?: string;
};

/** Temporarily omit missing fields, including their labels and hints. */
export function PendingField(_props: PendingFieldProps) {
  return null;
}

export default PendingField;
