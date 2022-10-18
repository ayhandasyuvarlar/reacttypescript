import React from 'react'

type RandomNumberType = {
  value: number
}
type PositiveNumber = RandomNumberType & {
  isPositive: boolean
  isNegative?: never
  isZero?: never
}
type NegativeNummber = RandomNumberType & {
  isNegative: boolean
  isPositive?: never
  isZero?: never
}
type ZeroNumber = RandomNumberType & {
  isZero: boolean
  isNegative?: never
  isPositive?: never
}
type RandomNumberProps = PositiveNumber | NegativeNummber | ZeroNumber
export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps): JSX.Element => {
  return (
    <div>
      {value} {isPositive && 'positive'} {isNegative && 'negative'}
      {isZero && 'zero'}
    </div>
  )
}
