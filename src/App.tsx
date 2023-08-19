import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLanguages, toFavorite, useLanguages } from "./redux/sliceLanguages";
import { link } from "fs";

function App() {
  const languages = useSelector(useLanguages);

  const [newLanguage, setNewLanguage] = useState('')

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <ul>
          {languages.map((language) => {
            return (
              <div style={{display: "flex", gap: "20px", marginBottom: "10px"}}>
                <span style={{color: language.favorite ? 'green' : 'black'}}>{language.name}</span>
                <button type="button" onClick={() => dispatch(toFavorite(language.name))}>{language.favorite ? 'Desfavoritar' : 'Favoritar'}</button>
              </div>
            )
            })}
        </ul>
      </div>
      <div>
        <input type="text" value={newLanguage} onChange={(e) => setNewLanguage(e.target.value)} />
        <button type="button" onClick={() => dispatch(addLanguages(newLanguage))}>Adicionar nova Linguagem</button>
      </div>
    </div>
  );
}

export default App;
