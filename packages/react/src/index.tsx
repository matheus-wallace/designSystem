import { styled } from './styles'

const ButtonStyled = styled('button', {
  backgroundColor: '$ignite500',
  color: 'white',
  padding: '$20 $40',
  borderRadius: '$md',
  border: 'none',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray700',
  },
})

export function App() {
  return (
    <>
      <ButtonStyled>Hello monorepo!</ButtonStyled>
      <h1>Hello World</h1>
    </>
  )
}
