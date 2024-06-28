import { Button, Input, Stack } from "@chakra-ui/react"
import { SubMenuItem } from "../../common/configs/ui/menus/menus.type"
import colors from "../../common/theme/colors/colors"
import { Form } from "react-router-dom"
import React from "react"

const TableHeaderForm = ({ subMenu }: { subMenu: SubMenuItem }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let a = new FormData(e.currentTarget)

    let obj: any = {}

    a.forEach((e, key) => Object.defineProperty(obj, key, { value: e, writable: false }))
    // Add code as id
    if (obj.code) {
      Object.defineProperty(obj, 'id', {
        value: obj.code,
        writable: false
      })
    }
    
    if (subMenu.subMenuType && subMenu.subMenuType.create) {
      subMenu.subMenuType.create(obj)
      e.currentTarget.reset()
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack spacing={8} direction="row" justifyContent="space-between">
        <Stack direction="row">
          {subMenu.headers!.map((header, index) => <Input border={`1px solid ${colors.lightGray}`} name={header.label.toLowerCase()} variant={"outline"} key={index} placeholder={header.label} size='lg' />)}
        </Stack>
        <Button type="submit" _active={colors.green} size="lg" color={colors.green} bg={colors.white} border={`1.5px solid ${colors.green}`} >Ajouter</Button>
      </Stack>
    </Form>
  )
}

export default TableHeaderForm
