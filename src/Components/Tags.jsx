import React, { useEffect, useState } from 'react'
import '../Styles/Components/Tags.css'

const Tags = ({ listTag }) => {
    const [tags, setTags] = useState([])

    useEffect(() => {
        setTags(listTag)
    }, [listTag])
    return (
        <div className="Tags">
            {tags
                ? tags.map((tag, index) => (
                      <p className="Tags__p" key={index}>
                          {tag}
                      </p>
                  ))
                : ''}
        </div>
    )
}

export default Tags
