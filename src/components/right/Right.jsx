import "./right.css";
import customization from "../../editOptions";
const options = [
  "Hair",
  "Ears",
  "Eyes",
  "Mouth",
  "Neck",
  "Leg",
  "accessory",
  "Background",
];
const Right = ({
  setSelectedOptions,
  selectedOptions,
  setCustomizations,
  customizations,
}) => {
  function getAccessories() {
    return options.map((option) => {
      return (
        <button
          key={option}
          onClick={() => selectedValue(option)}
          type="button"
          className={`m-2 btn btn-outline-primary  ${
            selectedOptions.accessory === option.toLowerCase() ? "font-weight-bold active" : "font-weight-bold"
          }  `}
        >
          {option}
        </button>
      );
    });
  }

  function printOptedOptions(optedOptions) {
    const selectedAccessory = customization[optedOptions];

    return selectedAccessory.map((option) => {
      return (
        <button
          key={option}
          onClick={() => setValue(option)}
          type="button"
          className={`m-2 my-2 btn btn-outline-primary  ${
            customizations[selectedOptions["accessory"]] == option.toLowerCase()
              ? "active font-weight-bold"
              : "font-weight-bold"
          }`}
        >
          {option}
        </button>
      );
    });
  }

  function selectedValue(option) {
    setSelectedOptions({ ...selectedOptions, accessory: option.toLowerCase() });
    setCustomizations({
      ...customizations,
      [option.toLowerCase()]: customizations[option.toLowerCase()],
    });
  }

  function setValue(option) {
    // discuss here
    // setSelectedOptions({...selectedOptions, style : option.toLowerCase(option)})
    setCustomizations({
      ...customizations,
      [selectedOptions["accessory"]]: option.toLowerCase(option),
    });
  }

  return (
      <div className="row">
        {selectedOptions && (
          <div className="col-md-12 mb-4 ">
            <h3 className="font-weight-bold">ACCESSORIZE THE ALPACA'S</h3>
            {getAccessories()}
          </div>
        )}
        <div className="col-md-12">
          <h3 className="font-weight-bold">STYLE</h3>
          {printOptedOptions(selectedOptions.accessory)}
        </div>
      </div>
  );
};

export default Right;
