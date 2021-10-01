export const Item = ({ item }) => {
	return (
		<span className=''><i className={`${item.icon} pr-6  self-center h-1 w-1 text-green-400`}></i>{ item.value }</span>
	)
}