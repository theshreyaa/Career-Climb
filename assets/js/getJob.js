// 13 get jobs
const featured_jobs_cont = document.getElementById("job-listing");

async function getFeaturedJobs(){
  const featuredJobsSnap = await firebase.firestore().collection('Jobs').get();

  for(var i=0; i<featuredJobsSnap.docs.length; i++)
  {
    const featuredJob = featuredJobsSnap.docs[i].data();

    if(featuredJob.Role === undefined)
       continue;

       
    const jobContent = `<div class="single-job-items mb-30">
    <div class="job-items">
        <div class="company-img">
            <a href="#"><img src="assets/img/icon/job-list1.png" alt=""></a>
        </div>
        <div class="job-tittle job-tittle2">
            <a href="#">
                <h4>${featuredJob.Role}</h4>
            </a>
            <ul>
                <li>${featuredJob.CompanyName}</li>
                <li><i class="fas fa-map-marker-alt"></i>${featuredJob.Location}</li>
                <li>${featuredJob.Stipend}</li>
            </ul>
        </div>
    </div>
    <div class="items-link items-link2 f-right">
        <a href="job_details.html">${featuredJob.Type}</a>
        <span>7 hours ago</span>
    </div>
  </div>`;
    featured_jobs_cont.innerHTML += jobContent;
  }
  
}

getFeaturedJobs();