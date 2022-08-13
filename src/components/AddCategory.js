import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const HandleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 1) {
            setCategories((lastCat) => [inputValue.trim(), ...lastCat]);
            setInputValue("");
        }
    };

    return (
        <>
            <form onSubmit={HandleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="animate__animated animate__fadeInRight"
                />
            </form>
        </>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
