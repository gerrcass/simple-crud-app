import React from 'react'

function getBase64(file){
    return new Promise((resolve,reject) => {
        const reader = new FileReader()

        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
        //reader.onerror = reject
        reader.readAsDataURL(file)
    })
}


class PostAdmin extends React.Component{
    state = {}

    render(){
        const {createPost} = this.props
        return(
            <form
                onSubmit={async (e) => {
                    e.preventDefault()
                    
                    let image   
                    if (this.imageRef.files.length > 0 ){
                        const file = this.imageRef.files[0]
                        // debugger
                        image = await getBase64(file)
                    }
                    
                    // debugger

                    createPost({
                        imageUrl:image,
                        content: this.textRef.value
                    })
                    this.textRef.value = ''
                    this.imageRef.value = ''
                }}
            >
                <div className="card border-light mb-3">
                    <div className="card-header">Crear Publicación</div>
                    <div className="card-body">
                        <textarea 
                            ref={ref => this.textRef = ref}
                            className="form-control nooutline mb-3"
                            placeholder="¿Qué estás pensando?"
                        />
                        <label className="btn btn-secondary m-0 ml-2 mr-2" htmlFor="photoFile">Foto</label>
                        <input 
                            ref={ref => this.imageRef = ref}
                            type="file"
                            className="form-contorl-file d-none"
                            id="photoFile"
                        />
                        <button type="submit" className="btn btn-primary">Publicar </button>

                    </div>

                </div>
            </form>
        )
    }
}

export default PostAdmin