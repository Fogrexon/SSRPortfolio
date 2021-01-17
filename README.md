# Fogrex portfolio
## 概要
ホームページ
ギャラリーページ
ブログページ
管理ページ

## .envに書くべき
FirebaseのAPIキーとか
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_DATABASE_URL
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID

管理者のFirebase AuthenticationのUID
NEXT_PUBLIC_ADMINISTRATOR_UID

## ページ構成
/
/about
/gallery
/blog
/blog/:blogid

/admin
/admin/signin
/admin/gallery
/admin/blog
/admin/blog/:blogid

