'use client'

import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'

type Props = {
  title: string
  content: string | string[]
}

export default function Accordion(props: Props) {
  return (
    <CAccordion activeItemKey={2} className="w-[50%]">
      <CAccordionItem itemKey={1}>
        <CAccordionHeader className="bg-[#ff6060] text-white font-medium rounded-[5px] p-[10px] text-[19px]">
          {props.title}
        </CAccordionHeader>
        <CAccordionBody className="pt-[15px]">
          {typeof props.content === 'object'
            ? props.content.map((equipment) => {
                return <p key={equipment}>- {equipment}</p>
              })
            : props.content}
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  )
}
