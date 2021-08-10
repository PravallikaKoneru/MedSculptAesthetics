using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MedSculptAesthetics.Models;
using Microsoft.Extensions.Configuration;
using MedSculptAesthetics.DAL;

namespace MedSculptAesthetics.Controllers
{
    public class HomeController : Controller
    {
        //private readonly ILogger<HomeController> _logger;
        public IConfiguration _configuration { get; }
        public HomeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }



        //public HomeController(ILogger<HomeController> logger)
        //{
        //    _logger = logger;
        //}

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }
        public IActionResult CustomerReviews()
        {
            //ReviewsRepository reviewsRepository = new ReviewsRepository(_configuration);
            //var customerReviews = reviewsRepository.GetCustomerReviews();

            //return View(customerReviews);
            return View(new List<CustomerReview>());
        }

        public IActionResult Contact()
        {
            return View();
        }

        public IActionResult FrequentlyAskedQuestions()
        {
            return View();
        }

        public IActionResult Procedures()
        {
            return View();
        }

        public IActionResult Botox()
        {
            return View();
        }

        public IActionResult Dysport()
        {
            return View();
        }

        public IActionResult WeightLoss()
        {
            return View();
        }

        public IActionResult Fillers()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Review(string FirstName, string LastName, string ReviewMessage,int rating)
        {
            //CustomerReview customerReview = new CustomerReview { first_name = FirstName, last_name = LastName, review = ReviewMessage, rating = rating };
            //ReviewsRepository reviewsRepository = new ReviewsRepository(_configuration);
            //reviewsRepository.InsertReview(customerReview);

            //var reviews = reviewsRepository.GetCustomerReviews();
            //return View("CustomerReviews", reviews);

            return View("CustomerReviews", new List<CustomerReview>());


        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
