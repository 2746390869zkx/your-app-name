import { useState } from 'react';
import styles from './styles.module.css'


const TagsInput = ({tags:Array}) => {

    const [tagsList, setData] = useState([]);
    // const [curTagIndex, setCurTagIndex] = useState(0)
    
    // const tagsList = ['1', '2', '3333']
    const tagClass = 'ml-3 w-10 h-10 b'
    
    const divClass = 'flex jus'

    const isEmptyStr = (strings:string) => {
        
    }

        // 处理失去焦点事件的函数
    const handleBlur = (e) => {
        if (e.target.value.trim()) {
            // 将当前输入值添加到数组中
            setData([...tagsList, e.target.value]);
            // 清空输入框
            e.target.value = '';
        }
    };

    // 处理按键事件的函数
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleBlur(e)
        }
    };

    const deleteTag = (curTagIndex) => {
        console.log(curTagIndex)
        setData(tagsList.filter((v, index) => index !== curTagIndex))
    }

    return (    
        <div className={styles.tagDiv}    style={{display: 'flex',width:'90%', minHeight: '50px'
            , alignItems: 'center', placeItems: 'center',flexWrap: 'wrap' /* 允许子元素换行 */
        }}>
            {
                tagsList.map((tag,tagIndex) => (
                    <div contentEditable="false" style={{marginTop:'3px', marginBottom: '3px'}}>
                        <span key={tagIndex} className={tagClass} style={{textAlign:'center',minWidth:'30px',marginLeft:'10px', height:'25px', backgroundColor: 'transparent',
                        border: '1px solid #FFFFFF',borderRadius:'8px', alignItems: 'center', color: 'white'
                    }}>
                        <span style={{margin:'10px',alignItems: 'center'}}>{tag} <span className={styles.canelSpan} onClick={() => deleteTag(tagIndex)} style={{fontSize:'13px',height: '100%', width: '20px', borderRadius:'5px', cursor: 'pointer'}} >X</span></span>
                    </span>
                    </div>
                    
                ))
            }
            <input className={styles.textInput} onBlur={handleBlur}
            onKeyDown={handleKeyDown} contentEditable="true" placeholder="请输入内容,按Enter添加标签" style={{flex: 1, marginLeft: '10px', height:'100%', 
                backgroundColor: 'transparent', borderColor: 'transparent',color: 'white'
            }}/>
        </div>
    )
}

export default TagsInput