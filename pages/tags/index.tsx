'use client'
import TagsInput from "../../components/inputs/TagsInput"

function Page() {
    const tags = ['1', '2', '3']
    return (
        <TagsInput tags={tags}/>
    )
}

export default Page