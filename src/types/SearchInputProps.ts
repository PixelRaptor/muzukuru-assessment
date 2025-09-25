export default interface SearchInputProps {
	placeholder?: string
	value?: string
	onChange?: (value: string) => void
	onSearch?: (value: string) => void
	onAddNewTask?: (value: string) => void
}
