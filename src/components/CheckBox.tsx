import React from 'react'
import { ComponentData } from './App'


interface CheckBoxProps {
    checkboxNumber: number
    components: ComponentData[],
    handleCheckboxToggle: (id: number) => void
}


const CheckBox: React.FC<CheckBoxProps>= ({components, handleCheckboxToggle, checkboxNumber}) => {
    
  return (
    <label className="checkbox-label">
    <input
      type="checkbox"
      checked={components.some(component => component.id === checkboxNumber)}
      onChange={() => handleCheckboxToggle(checkboxNumber)}
    />
    Checkbox {checkboxNumber + 1}
  </label>
  )
}

export default CheckBox