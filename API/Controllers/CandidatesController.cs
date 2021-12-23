using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Candidates;
using Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class CandidatesController : BaseApiController
    {

        public CandidatesController()
        {
        }

        [HttpGet()]
        public async Task<ActionResult<IEnumerable<Candidate>>> Get()
        {
            return Ok(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Candidate>> Get(int id)
        {
            return Ok(await Mediator.Send(new Details.Query() { CandidateId = id }));
        }
    }
}