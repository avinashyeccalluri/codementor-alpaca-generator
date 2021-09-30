import customization from "../../editOptions";
export default function Footer({ setCustomizations, customizations }) {
  function randomCustomizationsData(e) {
    e.preventDefault();
    const temp = {
      accessory: getRandomValue(customization["accessory"]),
      background: getRandomValue(customization["background"]),
      ears: getRandomValue(customization["ears"]),
      eyes: getRandomValue(customization["eyes"]),
      hair: getRandomValue(customization["hair"]),
      leg: getRandomValue(customization["leg"]),
      mouth: getRandomValue(customization["mouth"]),
      neck: getRandomValue(customization["neck"]),
    };
    setCustomizations(temp);
  }

  function getRandomValue(arr) {
    return arr[
      Math.abs(Math.floor(Math.random() * arr.length) + 0)
    ].toLowerCase();
  }

  return (
    <div className="d-flex justify-content-center pb-3">
      <a
        href="/"
        onClick={randomCustomizationsData}
        className="mr-4 btn btn-primary btn-lg active"
        role="button"
        aria-pressed="true"
      >
        Randomize
      </a>
    </div>
  );
}
