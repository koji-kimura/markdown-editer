import Dexie from 'dexie'

// 型定義
export interface MemoRecord {
  datetime: string
  title: string
  text: string
}

// データベースを定義
const database = new Dexie('markdown-editor')
database.version(1).stores({ memos: '&datetime' })
const memos: Dexie.Table<MemoRecord, string> = database.table('memos')

export const putMemo = async (title: string, text: string): Promise<void> => {
  // ISO8601は視認性の高い形式
  const datetime = new Date().toISOString()
  await memos.put({ datetime, title, text })
}