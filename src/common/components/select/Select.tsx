import React, {FC, useEffect, useRef, useState} from 'react'
import s from './Select.module.scss'
import {LanguagesType} from "../../../header/nav/Nav";

type SelectPropsType = {
  options: LanguagesType
  onChangeOption: (option: string) => void
  defaultLanguage: string
  className?: string
}

export const Select: FC<SelectPropsType> = (({
                                              options,
                                              className,
                                              onChangeOption,
                                              defaultLanguage,
                                            }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(defaultLanguage)
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setSelectedId(defaultLanguage)
  }, [defaultLanguage])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (!rootRef.current?.contains(target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const currentOption = options.find((option) => option.id === selectedId) ?? options[0]

  const selectOption = (id: string) => {
    setSelectedId(id)
    onChangeOption(id)
    setIsOpen(false)
  }

  const onTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
      return
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen((prev) => !prev)
    }
  }

  return (
      <div ref={rootRef} className={`${s.select} ${className ?? ''}`.trim()}>
        <button
          type="button"
          className={s.trigger}
          onClick={() => setIsOpen((prev) => !prev)}
          onKeyDown={onTriggerKeyDown}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {currentOption?.title ?? ''}
        </button>
        {isOpen && (
          <ul className={s.list} role="listbox">
            {options.map((option) => (
              <li key={option.id}>
                <button
                  type="button"
                  className={`${s.option} ${option.id === selectedId ? s.optionSelected : ''}`.trim()}
                  onClick={() => selectOption(option.id)}
                  role="option"
                  aria-selected={option.id === selectedId}
                >
                  {option.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
  )
})
