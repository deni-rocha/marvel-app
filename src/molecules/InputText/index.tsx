import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const InputText = ({label, ...props}: Props) => {
  return (
    <label>
      <span>{label}</span>
      <input {...props}/>
    </label>
  )
}
