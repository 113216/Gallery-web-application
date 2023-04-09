import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import { useFormik } from 'formik';


function UploadForm() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [changedFile, setChangedFile] = useState(null);
    const [filename, setFileName] = useState(null)



    const types = ['image/png', 'image/jpeg'];

    const formik = useFormik({
        initialValues: {
            name: "",
            file: ""
        },
        validate: (values) => {
            let error = {}
            if (!values.name) {
                error.name = "please enter a file name"
            }
            if (!changedFile) {
                error.file = 'please choose a file'
            }
            return error
        },
        onSubmit: (values) => {
            setFile(changedFile)
            document.getElementById('formFile').value = '';
            formik.resetForm()
        }
    })
    const handleChange = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            var element = document.getElementById('formFile');
            var file = element.files[0];
            var blob = file.slice(0, file.size, 'image/png');
            var newFile = new File([blob], `${formik.values.name}`, { type: 'image/png' });
            setChangedFile(newFile)
            setFileName(formik.values.name)
            formik.errors.file = '';

        } else {
            setChangedFile(null);
            formik.errors.file = 'Please select an image file (png or jpg)';
        }

    };

    return (
        <>
            <button type="button" class="btn btn-success mt-4 mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa-solid fa-cloud-arrow-up"></i>  Upload Your Images Here...
            </button>
            <div className={"modal"} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={formik.handleSubmit}>
                                <label for="Name"><b>File Name</b></label>
                                <input className='form-control mt-3' type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {
                                    formik.errors.name ? <div style={{ color: 'red' }}>
                                        {formik.errors.name}
                                    </div>
                                        : ""
                                }
                                <div class="mb-3">
                                    <label for="formFile" class="form-label mt-3"><b>Upload the Image</b></label>
                                    <input class="form-control" type="file" id="formFile" onChange={handleChange} />
                                    {
                                        formik.errors.file ? <div style={{ color: 'red' }}>
                                            {formik.errors.file}
                                        </div>
                                            : ""
                                    }
                                </div>
                                {
                                    !formik.errors.name && changedFile !== null ? <input type="submit" className='btn btn-success' value="upload" data-bs-dismiss="modal" />
                                        :
                                        ""
                                }



                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
            <form>
                <div className="output">
                    {error && <div className="error">{error}</div>}
                    {file && <div><span className='loading'>{file.name}</span><div class="spinner-border text-dark" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div></div>}
                    {file && <ProgressBar file={file} setFile={setFile} filename={filename} />}
                </div>
            </form>
        </>

    );

}

export default UploadForm