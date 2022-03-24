import './reviews.css'
import React, {useState, useEffect} from "react";
import Form  from '../form/Form';
import Slider from '../slider/slider';


export default function reviews() {
   
    let review = false;
    function handleReview() {


        let res = document.querySelector('form');
        if(review) {
            res.style.display = 'none'
            review = false
        } else {
            res.style.display = 'block'
            review = true
        }
    }

    return(
        <div className="reviews">
            <div className="reviews-top">
                <div className="review-title">Отзывы</div>
                <button className="review-add" onClick={handleReview}>+ Добавить отзыв</button>
            </div>
            <div className="review-clients-block">
                <Slider />
            </div>
        </div>

    )
}




















// import React, { Component } from 'react'
// import { format } from 'date-fns'
// class App extends Component {

//   state = {
//     comments: [],
//     form: {
//       name: '',
//       comment: ''
//     }
//   }

//   componentDidMount() {
//     if (localStorage.getItem('state')) {
//       this.setState({ ...JSON.parse(localStorage.getItem('state')) })
//     }
//   }

//   addComment = () => {
//     this.setState({
//       comments: [
//         ...this.state.comments,
//         {
//           id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1, // max id +1
//           name: this.state.form.name,
//           comment: this.state.form.comment,
//           date: new Date()
//         }
//       ],
//       form: {
//         name: '',
//         comment: ''
//       }
//     }, () => localStorage.setItem('state', JSON.stringify(this.state)))
//   }

//   removeComment = (id) => {
//     this.setState({
//       comments: this.state.comments.filter(comment => comment.id !== id)
//     }, () => localStorage.setItem('state', JSON.stringify(this.state)))
//   }

//   handleChange = (e) => {
//     console.log(e.target.name)
//     this.setState({
//       form: {
//         ...this.state.form,
//         [e.target.name]: e.target.value,
//       }
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.comments.map(comment => <div key={comment.id}>
//           <span style={{ fontStyle: 'italic' }}>{comment.id} - {format(comment.date, 'DD/MM/YYYY')}: </span>
//           <strong>{comment.name}, </strong>
//           <span>{comment.comment}</span>
//           <button onClick={this.removeComment.bind(null, comment.id)}>Удалить комментарий</button>
//         </div>)}
//         <div>
//           <label>Имя: <input
//             type="text"
//             value={this.state.form.name}
//             name="name"
//             onChange={this.handleChange} /></label>
//           <label>Комментарий: <textarea
//             name="comment"
//             value={this.state.form.comment}
//             onChange={this.handleChange}></textarea>
//           </label>
//           <button onClick={this.addComment}>Добавить комментарий</button>
//         </div>
//       </div>
//     )
//   }
// }

// export default App