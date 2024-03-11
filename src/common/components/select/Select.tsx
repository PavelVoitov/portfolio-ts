import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, FC} from 'react'
import s from './Select.module.scss'
import {LanguagesType} from "../../../header/nav/Nav";

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>

type SelectPropsType = DefaultSelectPropsType & {
  options: LanguagesType
  onChangeOption: (option: string) => void
  defaultLanguage: string
}

export const Select: FC<SelectPropsType> = ({
                                              options,
                                              className,
                                              onChange,
                                              onChangeOption,
                                              defaultLanguage,
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
        defaultValue={defaultLanguage}
        className={s.select}
        onChange={onChangeCallback}
        {...restProps}
      >
        {mappedOptions}
      </select>
  )
}
