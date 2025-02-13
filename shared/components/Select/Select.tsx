import { forwardRef, SelectHTMLAttributes } from "react";

import styles from "./Select.module.scss";

export interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string; flagCode:string}[];
}

const CustomSelect = forwardRef<HTMLSelectElement, CustomSelectProps>(
  ({ options, value, onChange, ...rest }, ref) => {
    return (
      <select
        ref={ref}
        value={value}
        onChange={onChange}
        className={styles.base}
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
