import React, { Component, useEffect, useState } from "react";

const RecipeChoices = ({handleChange, label, choices, checked }) => {

    return (
        <div>
            <div className="rsdio-btns">
                {choices.map((choice) => (
                    <li key={choice}>
                        <input
                            type="radio"
                            id={choice}
                            name={label}
                            value={choice}
                            checked={checked === choice}
                            onChange={(e) => handleChange(e, label)}
                        />
                        {choice}
                    </li>
                ))}
            </div>
        </div>
    )

};

export default RecipeChoices;