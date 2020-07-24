import React, {useEffect, useState} from "react";
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact'

/* Action Type */
const MEMBER_CHANGER = 'member/MEMBER_CHANGER'
const MEMBER_UPDATE = 'member/MEMBER_UPDATE'

/* Action */
const memberChangerAction = data => ({type: MEMBER_CHANGER, payload: data})
const memberUpdateAction = data => ({type: MEMBER_UPDATE, payload: data})

/* Reducer */
export const memberChangerReducer = (state, action) => {
    switch (action.type) {
        case MEMBER_CHANGER: return {}
        case MEMBER_UPDATE: return {}
        default: return state
    }
}

/* Thunk */
const memberUpdateThunk = data => dispatch => {
    axios.put('', data)
        .then()
        .catch()
}
const memberChangeThunk = data => dispatch => {
    axios.put('', data)
        .then()
        .catch()
}

/* Component */
const MyPage = () => {
    const [email, setEmail] = useState('')
    const [name, setName] =useState('')
    const [regdate, setRegdate] = useState('')

    const onClickChanger = e => {

    }
    const onClickNameChanger = e => {

    }
    const onClickUpdate = e => {

    }

    useEffect(() => {
        setEmail(sessionStorage.getItem('email'))
        setName(sessionStorage.getItem('name'))
    })

    return <>
        <MDBContainer className="py-5">
            <MDBRow center>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                            <form>
                                <p className="h4 text-center py-4">회원 정보</p>
                                <div className="grey-text">
                                    <MDBInput
                                        label="이메일"
                                        group
                                        type="email"
                                        icon="null"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={email}
                                    />
                                    <MDBInput
                                        label="닉네임 (변경 하려면 클릭)"
                                        group
                                        type="text"
                                        icon="null"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={sessionStorage.getItem('userName')}
                                        onClick={onClickChanger}
                                    />
                                    {name ?
                                        <div>
                                            <MDBInput
                                                label="변경할 닉네임"
                                                group
                                                type="text"
                                                icon="null"
                                                validate
                                                onChange={onClickNameChanger}
                                            />
                                            <MDBInput
                                                label="가입일"
                                                group
                                                type="text"
                                                icon="null"
                                                validate
                                                value={regdate.split('T')[0]}
                                            />
                                        </div> :
                                        <MDBInput
                                            label="가입일"
                                            group
                                            type="text"
                                            icon="null"
                                            validate
                                            value={regdate.split('T')[0]}
                                        />}
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <MDBBtn color="cyan"  onClick={onClickUpdate}>
                                        닉네임 변경
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>
}
export default MyPage