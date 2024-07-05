import { SubMenuItem } from '../../common/configs/ui/menus/menus.type'
import styled from 'styled-components'
import { signal } from '@preact/signals-react'
import MainContentWrapper from './main-content-wrapper'

type MainContentProps = {
  title: string,
  icon: string,
  render?: () => JSX.Element,
  subMenus: SubMenuItem[] | undefined
}


const StyledMainContent = styled.div`
`;

const MainContent = ({ subMenus, title, render}: MainContentProps) => {
  const isHidden = signal<boolean>(false)

  const handleHidden = () => {
    console.log(isHidden.value)
    isHidden.value = !isHidden.value
  }

  return (
    <StyledMainContent>
      {render && render()}
      <MainContentWrapper handleHidden={handleHidden} isHidden={isHidden} subMenus={subMenus} title={title} />
    </StyledMainContent >
  )
}

export default MainContent
