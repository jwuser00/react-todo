---
globs: *.tsx,*.ts
alwaysApply: false
---

### 타입 선언
- 내장 type 아닌 경우, 아래와 같이 type을 따로 정의해서 구현해줘.
```typescript
interface AddFormProps {
    onAdd: (text: string) => void;
}
export default function AddForm({ onAdd }: AddFormProps) {
```
### componet 생성
- 아래와 같이 한줄로 선언해줘.
```typescript
export default function AddForm({ onAdd }: AddFormProps) {
```

### 스타일시트
- tsx 파일에 절대 스타일시트 코드를 추가하지마.
- .module.css에 스타일시트를 추가해서 사용해.
