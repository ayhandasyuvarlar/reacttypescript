type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
  position:Exclude<`${HorizontalPosition} - ${VerticalPosition}` , 'center-center' | 'center'>
}

export const Toast = ({ position }: ToastProps) => {
  return (
    <div>
      <div>Toast Notification Position :  {position}</div>
    </div>
  )
}
