import { useState } from 'react'
// initとkeyを返しているでその方はinitが文字列、keyが関数
// : [string, (s: string) => void]は戻り値の方
// 文字列または関数名って話？
export const useStateWithStorage = (init: string, key: string): [string, (s: string) => void] => {
  // useStateは変数と変更する値の対
  // まず初期値を渡すのでローカルストレージを参照
  const [value, setValue] = useState<string>(localStorage.getItem(key) || init)
  // localStorageへの穂zんを組み合わせた関数を生成する
  const setValueWithStorage = (nextValue: string): void => {
    setValue(nextValue)
    localStorage.setItem(key, nextValue)
  }

  return [value, setValueWithStorage]
}
