import React, { useContext, useState, createContext } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./CustomSelect.css";

const SelectContext = createContext({
  name: "",
  selectedValue: "",
  setSelectedValue: () => {},
  setIsOpen: () => {},
  handleInputChange: (e) => {},
});

export const CustomSelect = ({
  placeholder,
  children,
  name,
  defaultValue,
  handleInputChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = React.Children.toArray(children).find(
    (child) => child.props.value === selectedValue
  );

  // function to toggle option
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SelectContext.Provider
      value={{
        name,
        selectedValue,
        setSelectedValue,
        setIsOpen,
        handleInputChange,
      }}
    >
      {/* container for select button and options */}
      <div className="select-wrapper">
        {/* button to toggle select options */}
        <button type="button" className="select-btn" onClick={toggleOpen}>
          {/* display selected option as button child if selected label is available */}
          {selectedLabel ? (
            <div className="selected-option-wrapper">
              {selectedLabel.props.children}
            </div>
          ) : (
            // display placeholder value if nothing selected
            <div className="placeholder-wrapper">{placeholder}</div>
          )}
          {/* up and down icon of select */}
          <span className="chevron-icon">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
        </button>
        {/* toggle options */}
        {isOpen && children && (
          // container for options
          <ul className="select-options-list">
            {/* render options */}
            {React.Children.map(children, (child, index) => {
              return (
                <li className="select-option" key={index}>
                  {child}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </SelectContext.Provider>
  );
};

export const CustomOption = ({ children, value, id }) => {
  const {
    name,
    setSelectedValue,
    selectedValue,
    setIsOpen,
    handleInputChange,
  } = useContext(SelectContext); // get values from select context

  // function to call when option is selected
  const changeSelectedValue = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    handleInputChange({ target: { name: name, value: value } });
  };

  return (
    <>
      {/* using input with radio type for options, it is hidden*/}
      <input
        id={id}
        type="radio"
        value={value}
        className="select-input"
        checked={value === selectedValue}
      />
      {/* label is displayed with value bound to input */}
      <label
        htmlFor={id}
        className="select-option-label"
        onClick={() => changeSelectedValue(value)}
      >
        {children}
      </label>
    </>
  );
};
