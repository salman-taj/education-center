using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    public class CandidateController : BaseApiController
    {
        public CandidateController()
        {
        }

        [HttpGet("list")]
        public ActionResult Get()
        {
            return Ok();
        }
    }
}