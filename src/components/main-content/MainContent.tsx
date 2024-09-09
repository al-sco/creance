import { SubMenuItem } from '../../common/configs/ui/menus/menus.type'
import styled from 'styled-components'
import { signal } from '@preact/signals-react'
import MainContentWrapper from './main-content-wrapper'
import colors from '../../common/theme/colors/colors'
import { SubMenuParent } from '../../common/configs/ui/menus/menu.data'

type MainContentProps = {
  title: string,
  icon: string,
  render?: () => JSX.Element,
  subMenus: SubMenuItem[] | undefined
  parents?: SubMenuParent[]
}


const StyledMainContent = styled.div`
    background-color: ${colors.background};
`;

const MainContent = ({ subMenus, title, render, parents }: MainContentProps) => {
  const isHidden = signal<boolean>(false)

  const handleHidden = () => {
    isHidden.value = !isHidden.value
  }

  return (
    <StyledMainContent>
      {render && render()}
      <MainContentWrapper handleHidden={handleHidden} isHidden={isHidden} subMenus={subMenus} title={title} parents={parents} />
    </StyledMainContent >
  )
}

export default MainContent
