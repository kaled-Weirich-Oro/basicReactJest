import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';


export function CustomCheckbox() {
  const [check, setCheck] = useState(true);
  return (
    <>
     <Checkbox
      checked={check}
      onChange={() => setCheck(!check)}
      value={"Ativo"}
      />
      { check && <div>Checkbox ativo</div> }
    </>
  )
}
