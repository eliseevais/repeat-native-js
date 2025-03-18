import React, {useState} from "react";

type LessonType = {
  title: number
  name?: string
}

type AddressType = {
  street: {
    title: string
  }
}

export type PropsType = {
  name: string
  age: number
  lessons: LessonType[]
  address: AddressType
}

type ManPropsType = {
  title: string
  man: PropsType
  food: string[]
  car: {
    model: string
  }
}

const UseDimychState = (m: string) => {
  return [m, function(){}]
}

const UseDimychState2 = (m: string) => {
  return {message: m, setMessage: function(){}}
}

export const ManComponent: React.FC<ManPropsType> = ({title, man, ...props}) => {

  const [message, setMessage] = useState<string>('hello')

  return (
    <div>
      <h1>{title}</h1>
      <hr/>
      <div>{man.name}</div>
      <div>{props.car.model}</div>
    </div>
  )
}
