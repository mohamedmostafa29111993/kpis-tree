import { TestBed } from '@angular/core/testing';

import { GetTreeviewNodesService } from './get-treeview-nodes.service';

describe('GetTreeviewNodesService', () => {
  let service: GetTreeviewNodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTreeviewNodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
