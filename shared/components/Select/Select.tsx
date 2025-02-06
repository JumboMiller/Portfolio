import { forwardRef, SelectHTMLAttributes } from "react";

import styles from "./Select.module.scss";

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
}

const CustomSelect = forwardRef<HTMLSelectElement, CustomSelectProps>(
  ({ options, value, onChange, ...rest }, ref) => {
    return (
      <select
        ref={ref}
        value={value}
        onChange={onChange}
        className={styles.select}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
