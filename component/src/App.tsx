import "./styles.scss";

type Props = {
  name: string;
}

export default function App({ name }: Props) {
  return (
    <div className="msg">
      <p>Olá {name} ! Você criou um componente React distribuído via UMD.</p>
    </div>
  )
}
