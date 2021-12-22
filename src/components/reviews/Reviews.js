import React from "react";

function Reviews(){
    return(
        <div id='testimonials'>
            <div className='container'>
                <div className='section-title text-center'>
                    <h2>Отзывы наших учеников</h2>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='testimonial'>
                            <div className='testimonial-image'>
                                <img src="https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg" alt='' />
                            </div>
                            <div className='testimonial-content'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos fugiat nulla pariatur quis rem repudiandae saepe vel vitae? Aperiam, doloribus eius minima natus nihil non nulla repellat velit. Officiis.</p>
                                <div className='testimonial-meta'> - Adam </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='testimonial'>
                            <div className='testimonial-image'>
                                <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt='' />
                            </div>
                            <div className='testimonial-content'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos fugiat nulla pariatur quis rem repudiandae saepe vel vitae? Aperiam, doloribus eius minima natus nihil non nulla repellat velit. Officiis.</p>
                                <div className='testimonial-meta'> - Misha </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='testimonial'>
                            <div className='testimonial-image'>
                                <img src="https://64.media.tumblr.com/300125831bf762e87933af4f536f178b/8d929e56461e9291-50/s640x960/372f8085dc862a5df440f805910b46844be0a030.jpg" alt='' />
                            </div>
                            <div className='testimonial-content'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos fugiat nulla pariatur quis rem repudiandae saepe vel vitae? Aperiam, doloribus eius minima natus nihil non nulla repellat velit. Officiis.</p>
                                <div className='testimonial-meta'> - Masha </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;