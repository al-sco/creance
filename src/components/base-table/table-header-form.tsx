import { Button, Input, Stack, useToast } from "@chakra-ui/react"
import { SubMenuItem } from "../../common/configs/ui/menus/menus.type"
import colors from "../../common/theme/colors/colors"
import { Form } from "react-router-dom"
import React from "react"
import { toastify } from "../../common/helper/toast_helper"

const TableHeaderForm = ({ subMenu }: { subMenu: SubMenuItem }) => {
  const toast=useToast()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let a = new FormData(e.currentTarget)
 
    

    let obj: any = {}

    a.forEach((e, key) => Object.defineProperty(obj, key, { value: e, writable: false }))
    // Add code as id
    console.log(obj);
    if (obj.code) {
      Object.defineProperty(obj, 'id', {
        value: obj.code,
        writable: false     })
    }
    
    if (subMenu.subMenuType && subMenu.subMenuType.create) {
      toastify(toast,submitData(obj),{
        description: 'Donnée enregistrée',
        title: ''
      })
      e.currentTarget.reset()
    }
  }

  const submitData=async(data:{})=>{
    if (subMenu.subMenuType && subMenu.subMenuType.create) {
    await subMenu.subMenuType.create(data)
    }
  }
  
  return (
    <Form onSubmit={handleSubmit}>
      <Stack spacing={8 } direction="row" justifyContent="space-between">
        <Stack direction="row">
          {subMenu.headers!.map((header, index) => <Input backgroundColor={colors.white} name={header.key} variant={"outline"} key={index} placeholder={header.label} size='lg' />)}
        </Stack>
        <Button type="submit" _hover={{color: colors.white, backgroundColor: colors.bleu}} _active={colors.green} size="lg" color={colors.bleu} bg={colors.background} border={`1.5px solid ${colors.bleu}`} >Ajouter</Button>
      </Stack>
    </Form>
  )
}

export default TableHeaderForm
