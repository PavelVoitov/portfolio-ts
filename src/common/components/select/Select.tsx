import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, FC} from 'react'
import s from './Select.module.css'
import {LanguagesType} from "../../../header/nav/Nav";

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>

type SelectPropsType = DefaultSelectPropsType & {
  options: LanguagesType
  onChangeOption: (option: string) => void
}

export const Select: FC<SelectPropsType> = ({
                                              options,
                                              className,
                                              onChange,
                                              onChangeOption,
                                              ...restProps}) => {
  const mappedOptions: JSX.Element[] = options
    ? options.map((o: any) => (
      <option
        id={'option-' + o.id}
        className={s.option}
        key={o.id}
        value={o.id}
      >
        {o.title}
      </option>
    ))
    : [] // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChangeOption) {
      onChangeOption(e.currentTarget.value)
    }
  }

  return (
    <select
      className={''}
      onChange={onChangeCallback}
      {...restProps}
    >
      {mappedOptions}
    </select>
  )
}
