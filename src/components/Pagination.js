import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight,faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    

    const goToNextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav>
            <ul className='pagination justify-content-center '>
                <li className="page-item mt-1">
                    <a className="  border-white  rounded-1 me-4  "
                        onClick={goToPrevPage} 
                        href='#'>
                        
                        <FontAwesomeIcon className=""icon={faCircleChevronLeft} size="2xl" style={{color: "#2d51e1",}} />
                       
                        
                    </a>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {` page-item px-2 mb-3  me-4 ${currentPage == pgNumber ? 'active' : ''} `} >
                       
                        <a onClick={() => setCurrentPage(pgNumber)}  
                            className='  page-link border border-primary border rounded-3 '  
                            >
                            
                            {pgNumber}
                        </a>
                      
                        
                    </li>
                ))}
                <li className="page-item mt-1">
                    <a className=" border-white  rounded-1 ms-1" 
                        onClick={goToNextPage}
                        href='#'>
                         
                          <FontAwesomeIcon icon={faCircleChevronRight} size="2xl" style={{color: "#254def",}} />
                         
                        
                       
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination