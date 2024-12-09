import Link from "next/link";
export const metadata = {
  title: {
    default: 'default title',
    template: '%s | Mahar App',
    absolute: '',
  },
  description: 'photos',
}

export default function RootLayout(props: {
  children: React.ReactNode,
  model:React.ReactNode
}) {
  return (
      <div> 
        {props.model}
        {props.children}     
      </div>
  );
}