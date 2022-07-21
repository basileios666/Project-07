import React from 'react'

function Error() {
  return (
    <div>
        <div class="not-found-box">
        <div class="icon">
            <i class="ion-alert-circle-outline"></i>
        </div>
        <h3 class="heading font-bold mb-10">Page Not found</h3>
        <p class="h5 text-center mb-20">The page you are searching for does not exist or cannot be found.</p>
        <a href="/" class="btn btn-primary"><i class="ion-home-outline icon-left"></i> Go Back Home</a>
    </div>
    </div>
  )
}

export default Error