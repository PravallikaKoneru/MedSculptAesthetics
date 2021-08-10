using Dapper;
using MedSculptAesthetics.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MedSculptAesthetics.DAL
{
    public class ReviewsRepository
    {
        private readonly IConfiguration _configuration;

        public ReviewsRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public List<CustomerReview> GetCustomerReviews()
        {

            List<CustomerReview> retrievedRow = null;
            try
            {

                string connectionString = _configuration["ConnectionString"];

                if (string.IsNullOrEmpty(connectionString))
                    throw new Exception("ConnectionString cannot be null or empty.");


                using (IDbConnection dbConnect = new SqlConnection(connectionString))
                {
                    var response = dbConnect.Query<CustomerReview>("select * from reviews order by created_dt desc;", commandType: CommandType.Text);
                        retrievedRow = response.ToList();

                }
            }
            catch (Exception ex)
            {
                //_logger.LogFormattedException(ex);
                throw ex;
            }
            return retrievedRow;
        }

        public void InsertReview(CustomerReview customerReview)
        {
            try
            {

                string connectionString = _configuration["ConnectionString"];

                if (string.IsNullOrEmpty(connectionString))
                    throw new Exception("ConnectionString cannot be null or empty.");

                string query = string.Format("insert into reviews(first_name, last_name,  review) values('{0}','{1}', '{2}');", customerReview.first_name, customerReview.last_name,  customerReview.review);


                using (IDbConnection dbConnect = new SqlConnection(connectionString))
                {
                    var response = dbConnect.Execute(query, commandType: CommandType.Text);

                }
            }
            catch (Exception ex)
            {
                //_logger.LogFormattedException(ex);
                throw ex;
            }
        }
    }
}
