using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Candidates
{
    public class Details
    {
        public class Query : IRequest<Candidate>
        {
            public int CandidateId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Candidate>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<Candidate> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Candidates.FirstOrDefaultAsync(p=>p.CandidateId == request.CandidateId);
            }
        }
    }
}